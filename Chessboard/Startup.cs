using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Chessboard.Startup))]
namespace Chessboard
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
