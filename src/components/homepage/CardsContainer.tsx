import { useState, useEffect } from "react";
import Card from "../Card";
import diseases from "../../data/diseases";
import ContainerLogo from "../ContainerLogo";
import { loadShuffledImagesFromFolder } from "../utlis/imageLoader";

const CardsContainer = () => {
  const [diseasesWithImages, setDiseasesWithImages] = useState(diseases);

  useEffect(() => {
    const updatedDiseases = diseases.map((disease) => ({
      ...disease,
      pictures: loadShuffledImagesFromFolder(disease.folder),
    }));
    setDiseasesWithImages(updatedDiseases);
  }, []);

  const rows = [diseasesWithImages.slice(0, 4), diseasesWithImages.slice(4, 8)];

  return (
    <div className="cards-container flex-column width-max justify-self-center align-self-center space-evenly height-fit-content">
      <section className="row-title width-80 align-items-center">
        <span className="cards-container-section-title flex height-max">
          Czym się zajmujemy?
        </span>
      </section>

      <section className="cards-section relative flex-column width-80">
        <ContainerLogo />
        <div className="cards-row flex space-evenly">
          {rows[0].map((disease, index) => (
            <Card
              key={index}
              name={disease.name}
              shortDesc={disease.shortDesc}
              pictures={disease.pictures || []}
            />
          ))}
        </div>
        <div className="cards-row flex space-evenly">
          {rows[1].map((disease, index) => (
            <Card
              key={index}
              name={disease.name}
              shortDesc={disease.shortDesc}
              pictures={disease.pictures || []}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardsContainer;
