using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using aspNetCoreGSheetReactReader.Models;
using aspNetCoreGSheetReactReader.Utils;

namespace aspNetCoreGSheetReactReader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresidentsController : ControllerBase
    {
        private readonly PresidentsContext _context;

        public PresidentsController(PresidentsContext context)
        {
            _context = context;

            if (_context.Presidents.Count() == 0)
            {
                // Create a new President if collection is empty,
                // which means you can't delete all Presidents.
                SheetReader sr = new SheetReader();
                sr.ReadEntries();
                _context.Presidents.AddRange(sr.DataList);
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<President>> GetAll()
        {
            return _context.Presidents.ToList();
        }

        [HttpGet("{asc}", Name = "[action]")]
        public ActionResult<List<President>> GetAllOrdered(bool asc)
        {
            List<President> result = asc ?
                _context.Presidents.OrderBy(president => president.Name).ToList() :
                _context.Presidents.OrderByDescending(president => president.Name).ToList();

            return result;
        }

        [HttpGet("{id}", Name = "GetPresident")]
        public ActionResult<President> GetById(long id)
        {
            var item = _context.Presidents.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }
    }
}