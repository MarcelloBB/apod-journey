const PictureCard = ({ title, url, copyright, explanation }) => (
  <section 
      className="bg-zinc-800 mb-4 shadow-lg rounded-xl flex flex-col w-11/12 lg:w-7/12 xl:8/12 mx-auto"
  >
    {/* PIC NAME */}
    <div className="p-8 lg:p-16 md:p-16 flex flex-col justify-center items-center gap-3 lg:md:gap-6">
      {/* TITLE */}
      <h2 className="font-bold text-2xl font-LB text-center lg:md:text-4xl ">
        {title}
      </h2>

      {/* IMAGE */}
      <div className="p-4">
        <img 
          src={url}
          alt={explanation} 
          className="rounded-xl shadow-lg lg:h-96 md:h-96"
        />
      </div>

      {/* EXPLANATION */}
      <div className="text-justify p-2 first-letter:text-2xl first-letter:font-LB first-letter:ml-4">
        <p className="font-bold text-lg text-zinc-300 ">
          {explanation}
        </p>
      </div>

      {/* COPYRIGHT */}
      <span className="font-bold text-sm md:text-[10px] lg:text-[16px] xl:text-[16px] text-zinc-400 mt-4">
        Nasa APOD API | Copyright - {copyright}        
      </span>
    </div>
  </section>
)

export default PictureCard