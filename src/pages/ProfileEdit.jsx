import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';

const ProfileEdit = () => {
  return (
    <div>
      <NavbarMain />
        <div className="m-5 flex flex-grow justify-center">
          <div className="flex w-full max-w-sm items-center justify-center rounded-lg border-2 border-dark-200 md:px-30">
            <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username"> Email </label>
                <input className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password"> Password </label>
                <input className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="password" type="password" required minLength="8" maxLength="20" placeholder="******************" />
                <p className="text-xs italic text-red-500">Please choose a password.</p>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username"> Nombre </label>
                <input className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username"> Apellido </label>
                <input className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username"> Teléfono </label>
                <input className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Teléfono" />
              </div>
              <div className="flex items-center justify-between">
                <button className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none" type="button">Modificar</button>
              </div>
          </form>
          </div>
        </div>
      <Footer />
    </div>
  );
};

{/* <form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
<div class="mb-4">
  <label class="mb-2 block text-sm font-bold text-gray-700" for="username"> Email </label>
  <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
</div>
<div class="mb-6">
  <label class="mb-2 block text-sm font-bold text-gray-700" for="password"> Password </label>
  <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="password" type="password" required minlength="8" maxlength="20" placeholder="******************" />
  <p class="text-xs italic text-red-500">Please choose a password.</p>
</div>
<div class="mb-4">
  <label class="mb-2 block text-sm font-bold text-gray-700" for="username"> Nombre </label>
  <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
</div>
<div class="mb-4">
  <label class="mb-2 block text-sm font-bold text-gray-700" for="username"> Apellido </label>
  <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Username" />
</div>
<div class="mb-4">
  <label class="mb-2 block text-sm font-bold text-gray-700" for="username"> Teléfono </label>
  <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" placeholder="Teléfono" />
</div>
<div class="flex items-center justify-between">
  <button class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none" type="button">Modificar</button>
</div>
</form> */}

export default ProfileEdit;
