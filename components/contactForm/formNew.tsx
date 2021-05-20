//naam,instantie,email,message,button

//naam,instantie,email,message,button

export const ContactForm = () => {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <div className="flex flex-wrap -mx-3 mb-2">
        <input type="hidden" name="form-name" value="contact" />
        <div className="w-full md:w-1/3 px-3 mb-2">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Wat is je naam?
</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Naam" />
        </div>

        <p>
          <label htmlFor="youremail">
            Your Email:
        </label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
        </label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <button className="bg-color3 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded mt-4 items-center" type="submit">
          Verzend
</button>
      </div>
    </form>
  )
}






//   <div className="w-full md:w-1/3 px-3 mb-2">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
//     Wat is je naam?
// </label>
//     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Naam" />
//   </div>

//   <div className="w-full md:w-1/3 px-3 mb-2">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="instantie">
//       Wat is de naam van je instantie?
// </label>
//     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="instantie" type="text" placeholder="instantie" />
//   </div>

//   <div className="w-full md:w-1/3 px-3 mb-6 mb-2">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//       Email
// </label>
//     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Vul hier je e-mailadres in" />
//   </div>
// </div >

// <div>
//   <label htmlFor="about" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//       Waarmee kan ik je helpen?
//         </label>
//   <div className="mt-1">
//     <textarea id="about" name="about" rows={5} className="shadow-sm focus:ring-color3 focus:border-color3 mt-1 block w-full sm:text-sm border-gray-300 rounded-md border" placeholder="       Vul in..."></textarea>
//   </div>

// </div>


// <button className="bg-color3 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded mt-4 items-center" type="submit">
//     Verzend
// </button>
