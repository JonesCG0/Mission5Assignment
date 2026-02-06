using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mission5Assignment.Models;

namespace Mission5Assignment.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Coaching()
        {
            return View();
        }
    }
}