using ang.Context;
using ang.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ang.Services
{
    public class UserService:IUserService
    {
        private readonly UserContext _db;

        public UserService(UserContext context)
        {
            _db = context;
        }

        public async Task<bool> TryGetUserAsync(User user)
        {
            var isAny = await _db.Users.AnyAsync(x => x.Id == user.Id);
            return isAny;
        }

        public async Task<User> GetFirstUserAsync(int id)
        {
            var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<User> AddUserAsync(User user)
        {
            _db.Add(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            _db.Update(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteUserAsync(User user)
        {
            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            var data = await _db.Users.ToListAsync();
            return data;
        }
    }
}
