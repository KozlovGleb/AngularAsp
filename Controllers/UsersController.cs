using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ang.Models;
using ang.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllOrigin")]
    public class UsersController : ControllerBase
    {

        private readonly IUserService _service;

        public UsersController(IUserService service)
        {

            _service = service;
        }


        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            await _service.AddUserAsync(user);
            return Ok(user);
        }

        [HttpGet]
        //api/Users
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            return await _service.GetAllUsersAsync();
        }
        [HttpGet("{id}")]
        //api/Users/4
        public async Task<ActionResult<User>> GetById(int id)
        {
            return await _service.GetFirstUserAsync(id);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<User>> Put(int id, [FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            if (!await _service.TryGetUserAsync(user))
            {
                return NotFound();
            }
            await _service.UpdateUserAsync(user);
            return Ok(user);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(int id)
        {
            User user = await _service.GetFirstUserAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            await _service.DeleteUserAsync(user);
            return Ok(user);
        }

    }
}
