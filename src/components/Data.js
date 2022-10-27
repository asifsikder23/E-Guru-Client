import { ArrowDownIcon } from "@heroicons/react/24/solid";
import React from "react";

const Data = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
              <img src="https://getkt.com/wp-content/uploads/2019/02/Cross-Origin-Resource-Sharing.jpg" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                CORS?
              </a>
              <p href="#" className="text-sm pb-8">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  Md. Asif Ullah Sikder
                </a>
                , Published on October 27th, 2020
              </p>
              <h1 className="text-2xl font-bold pb-3">What is CORS?</h1>
              <p className="pb-3">
                Cross-origin resource sharing (CORS) is a browser mechanism
                which enables controlled access to resources located outside of
                a given domain. It extends and adds flexibility to the
                same-origin policy (SOP). However, it also provides potential
                for cross-domain attacks, if a website's CORS policy is poorly
                configured and implemented. CORS is not a protection against
                cross-origin attacks such as cross-site request forgery (CSRF).
              </p>
              <p className="pb-3">
                The role of a CORS policy is to maintain the integrity of a
                website and secure it from unauthorized access. The CORS
                protocol was defined to relax the default security policy called
                the Same-Origin Policy (SOP) used by the browsers to protect
                their resources. The Same-Origin Policy permits the browser to
                load resources only from a server hosted in the same-origin as
                the browser. The SOP was defined in the early years of the web
                and turned out to be too restrictive for the new age
                applications where we often need to fetch different kinds of
                resources from multiple origins. The CORS protocol is
                implemented by all modern browsers to allow controlled access to
                resources located outside of the browser’s origin.
              </p>
            </div>
          </article>
          
          

          <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
              <img
                src="https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/274233181_3085646058375783_6690705659848583132_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHYmM8By5Myxtb_oY0ILgelRCR17VNXxDBEJHXtU1fEMKDbGp-fVNIrgPRzX4dJhQw7i8rXwM919KgUH0m-9vlS&_nc_ohc=QolRrm1g3DYAX_pWeqX&_nc_ht=scontent.fdac145-1.fna&oh=00_AfArrUEdIx_n8paQcHC_cJliCDAT48-HQrTyg-IYeS41_Q&oe=635F1FED"
                class="rounded-full shadow h-32 w-32"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <p className="font-semibold text-2xl">Md. Asif Ullah Sikder</p>
              <p className="pt-2">
                Honest and have a very good manner. I spend my time to work on
                development because it's my passion I like fruit, ice-cream and
                my most favorite biryiaani and like to play Chess.
              </p>
              <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                <a className="" href="https://www.facebook.com/asifullahsikder">
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="pl-4"
                  href="https://www.instagram.com/asifullahsikder/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="pl-4" href="https://twitter.com/asifsikder23">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="pl-4"
                  href="https://www.linkedin.com/in/md-asif-ullah-sikder-a6993b178/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full md:w-1/3 flex flex-col items-center px-3">

        <button className="btn btn-wide">Download PDF 
        <ArrowDownIcon className="h-6 w-6 text-blue-500"/>
        </button>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              The way we work has been irreversibly disrupted. Covid-19 has
              unmasked a desire for people to work on their own terms. At their
              own pace. In their own environment. As hybrid workplaces
              increasingly become the norm, hybrid learning is reinventing the
              way we approach professional and on-the-job training & education.
              Let our guide be your guide to adopting hybrid learning into your
              training programs.
            </p>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
              />
            </div>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow @e-guru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
