function Contact() {
  return (
    <div
      className="text-white flex flex-nowrap items-center justify-center gap-8 p-8"
      style={{ height: "calc(100vh - 35%)" }}
    >
      <div className=" w-1/2 h-full  flex items-center justify-center p-8">
        <div className="text-center w-full h-1/2 border-2 shadow-white shadow-xl rounded-lg overflow-hidden">
          Card
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center p-8 text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Molestias magnam soluta
        quia, possimus iusto qui natus, veritatis nulla iure illo earum optio in
        delectus quisquam hic nihil animi magni iste.
      </div>
    </div>
  );
}

export default Contact;
