function TodoInput() {
  return (
    <div className="h-full w-1/2 bg-[url('./assets/Background-2.png')] bg-cover">
      <div className="flex justify-center items-center h-1/2">
        <h1
          className="text-8xl text-center font-[poppins] font-bold
        bg-[url('./assets/colorful.jpg')] bg-cover bg-clip-text text-transparent"
        >
          Todo
        </h1>
      </div>
      <div className="flex gap-1 m-8">
        <input type="text" placeholder="Todo thing" className="bg-red w-full h-8 p-5 rounded-lg" />
        <button className="px-3 text-white bg-gradient-to-br from-orange-800 to-green-800 rounded-lg">Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
