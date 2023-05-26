import React from "react";
import mwaruba from "../Images/mwaru.jpg";
import aloevera from "../Images/herbal six.jpg";
import licorice from "../Images/ulcer..jpeg";
import wwww from "../Images/herbal lucy 2.jpg";

export const Ill = () => {

  return (
    <div>
      <div className="container ">
        <div className="card-header">
          <h3 className="font-italic text-center">
            Grant to find you here.
          </h3>
          <h3 className="font-italic text-center"> CONSTITUENTS FOR OUR MEDICENE</h3>
        </div>

        <div className="row  my-2">
          <div class="card p-3">
            <img src={mwaruba} class="card-img-top" alt="..." />
            <h5 class="card-header bg-dark text-white ">Neem</h5>
            <div class="card-body">
              <p class="card-text">
                Neem is a tree. The bark, leaves, and seeds are used to make
                medicine. Less frequently, the root, flower, and fruit are also
                used. Neem leaf is used for leprosy, eye disorders, bloody nose,
                intestinal worms, stomach upset, loss of appetite, skin ulcers,
                diseases of the heart and blood vessels (cardiovascular
                disease), fever, diabetes, gum disease (gingivitis), and liver
                problems.
              </p>
            </div>
          </div>

          <div className="card ">
            <img className="img w-100" src={licorice} alt="img"></img>
            <div className="card-header bg-dark text-white ">Licorice</div>
            <div className="card-body">
              <p className="">
                The root of this plant has antispasmodic and anti-infrimmatory
                properties of gastric mucosa However, preparation DLG licore
                seem to be more effective to counteract heartburn and neutralize
                excess acidity.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="img" src={aloevera} alt="img"></img>
            <div className="card-header bg-dark text-white ">Aloe vera</div>
            <div className="card-boby">
              <p>
                Aloe vera has a range of therapeutic properties, especially as
                an ointment for the skin and gums. People can use bottled aloe
                vera gel or take it directly from the leaf of an aloe plant.
                Aloe vera juice has different uses to aloe vera gel. Oral
                options should contain decolorized whole leaf extract of aloe
                vera to minimize risk. A person should always speak to a doctor
                before using aloe products to treat a condition.{" "}
              </p>
            </div>
          </div>

          <div className="card">
            <img className="img" src={wwww} alt="img"></img>
            <div className="card-header bg-dark text-white">Ginger</div>
            <div className="card-text">
              <p>
                People typically use fresh or dried ginger in cooking or herbal
                tea, and some take ginger supplements for their possible health
                benefits. Ginger root comes from the Zingiber officinale plant,
                and it has been used in Chinese and Indian medicine for
                thousands of yearsTrusted Source. Ginger may help relieveTrusted
                Source nausea and vomiting and aid digestionTrusted Source.
                Antioxidants and other nutrients in ginger root may help prevent
                or treat arthritis, inflammation, and various types of
                infection. Ginger may also reduce the risk of diabetes, cancer,
                and other health problems.
              </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
