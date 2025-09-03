import frontPic from "../../assets/front_pic.png"

export function EntryPicture() {


  return (
    <div className="entry-picture flex justify-center align-items-center width-half height-max">
      <section className="entry-pic-section flex height-80 width-80 ">
        <img className="home-entry-img width-max height-max justify-center align-center" src={frontPic} alt="Pic" />
      </section>
    </div>
  );
}

export default EntryPicture;
