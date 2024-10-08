﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Team_5.Models.Auth;
using Team_5.Services.Interfaces;

namespace Team_5.Controllers
{
    [Authorize(Policy = "MasterPolicy")]
    public class MasterController : Controller
    {
        private readonly IMasterService _masterSvc;

        public MasterController(IMasterService masterService)
        {
            _masterSvc = masterService;
        }

        public async Task<IActionResult> ManageRoles()
        {
            ViewBag.Users = await _masterSvc.GetAllUsersWithRolesAsync();
            ViewBag.Roles = await _masterSvc.GetAllRolesAsync();
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ManageRoles(int idUser, int idRole)
        {
            await _masterSvc.ToggleUserRoleAsync(idUser, idRole);
            return RedirectToAction("ManageRoles");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreateRole(Roles role)
        {
            if (!ModelState.IsValid)
            {
                ViewBag.Users = await _masterSvc.GetAllUsersWithRolesAsync();
                ViewBag.Roles = await _masterSvc.GetAllRolesAsync();

                return View("ManageRoles");
            }

            try
            {
                await _masterSvc.CreateRoleAsync(role);
                return RedirectToAction("ManageRoles");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("CrRole", ex.Message);
                return View("ManageRoles");
            }
        }
    }
}
