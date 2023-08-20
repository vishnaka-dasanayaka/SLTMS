function TeacherCard() {
  return (
    <div className="flex flex-col items-center justify-center m-5 text-white uppercase rounded-lg bg-lime-900 h-fit">
      <div className="my-3"><h1 className="text-2xl font-extrabold tracking-widest">fName lName</h1></div>
      <div className="flex justify-center bg-white h-44 w-60"><img className="h-full p-2" src="../img/teacher.jpg" alt="" /></div>
      <div className="mt-2"><h2 className="text-xl font-semibold tracking-wide">teaching area</h2></div>
      <div className="my-3">
        <button className="px-3 py-1 hover:cursor-pointer hover:text-btn_color rounded-lg  hover:bg-white uppercase bg-btn_color border-[1px] border-btn_color text-white font-extrabold">show</button>
      </div>
    </div>
  )
}

export default TeacherCard
