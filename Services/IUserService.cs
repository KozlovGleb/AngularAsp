using ang.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ang.Services
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsersAsync();
        Task<User> AddUserAsync(User user);
        Task<User> UpdateUserAsync(User user);
        Task<User> DeleteUserAsync(User user);
        Task<bool> TryGetUserAsync(User user);
        Task<User> GetFirstUserAsync(int id);
    }
}
