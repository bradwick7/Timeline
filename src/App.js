import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import "./App.css";
import "swiper/css";
import cssIcon from "./images/css.svg";
import cordovaIcon from "./images/cordova.svg";
import htmlIcon from "./images/html.svg";
import jsIcon from "./images/js.svg";
import androidIcon from "./images/android.svg";
import angularIcon from "./images/angular.svg";
import flutterIcon from "./images/flutter.svg";
import ionicIcon from "./images/ionic.svg";
import iosIcon from "./images/ios.svg";
import phonegapIcon from "./images/phonegap.svg";
import reactIcon from "./images/react.svg";
import reactNativeIcon from "./images/react_native.svg";
import swiftIcon from "./images/swift.svg";
import windowsPhoneIcon from "./images/windows.svg";
import xamarinIcon from "./images/xamarin.svg";
import { Mousewheel, Navigation } from "swiper";

function App() {
  return (
    <div className="container centered">
      <Swiper
        direction={"horizontal"}
        mousewheel={true}
        rewind={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="swiper centered"
      >
        <SwiperSlide className="slide">
          <Card
            date="1980"
            name="HTML"
            who="Tim Berners-Lee"
            description="El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos."
            image={htmlIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="1994"
            name="CSS"
            who="World Wide Web Consortium"
            description="Es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas."
            image={cssIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="1995"
            name="JS"
            who="Brendan Eich"
            description="JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico."
            image={jsIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2003"
            name="Android"
            who="Google Inc."
            description="Android es un sistema operativo móvil basado en el núcleo Linux y otros software de código abierto."
            image={androidIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2007"
            name="iOS"
            who="Apple Inc."
            description="iOS es un sistema operativo móvil de la multinacional Apple Inc. Originalmente desarrollado para el iPhone (iPhone OS), después se ha usado en dispositivos como el iPod touch y el iPad."
            image={iosIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2008"
            name="Phone Gap"
            who="Nitobi"
            description="PhoneGap permite a los programadores desarrollar aplicaciones para dispositivos móviles utilizando herramientas genéricas tales como JavaScript, HTML5 y CSS3. "
            image={phonegapIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2010"
            name="Angular"
            who="Google Inc."
            description="Es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles."
            image={angularIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2010"
            name="Windows Phone"
            who="Microsoft"
            description="Fue un sistema operativo móvil actualmente descontinuado, desarrollado por Microsoft como sucesor de Windows Mobile. A diferencia de su predecesor fue enfocado en el mercado de consumo en lugar del mercado empresarial. "
            image={windowsPhoneIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2011"
            name="Cordova"
            who="Apache Cordova"
            description="Es un popular entorno de desarrollo de aplicaciones móviles, originalmente creado por Nitobi. Adobe compró Nitobi en 2011, le cambió el nombre a PhoneGap, y más tarde liberó una versión de código abierto del software llamado Apache Cordova. "
            image={cordovaIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2011"
            name="Xamarin"
            who="Nat Friedman, Miguel de Icaza"
            description="Con un código compartido del lenguaje de programación C#, los desarrolladores de software pueden usar Xamarin para escribir aplicaciones móviles nativas para Android, iOS y Windows, y compartir código a través de múltiples plataformas, incluyendo Windows y macOS."
            image={xamarinIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2013"
            name="React"
            who="Jordan Walke"
            description="Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre."
            image={reactIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2013"
            name="Ionic"
            who="Drifty"
            description="Es un framework gratuito y open source para desarrollar aplicaciones híbridas multiplataforma que utiliza HTML5, CSS (generado por SASS) y Cordova como base. Es uno de los framework del momento por utilizar AngularJS para gestionar las aplicaciones, lo que asegura aplicaciones rápidas y escalables."
            image={ionicIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2014"
            name="Swift"
            who="Apple Inc."
            description="Swift es un intuitivo lenguaje de programación creado por Apple que permite diseñar apps para iOS, Mac, el Apple TV y el Apple Watch. Está pensado para dar a los desarrolladores más libertad que nunca. Es de código abierto y fácil de usar."
            image={swiftIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2015"
            name="React Native"
            who="Meta Platforms"
            description="React Native, es un framework de código abierto creado por Meta Platforms, Inc. Se utiliza para desarrollar aplicaciones para Android, Android TV, iOS, macOS, tvOS, Web, Windows y UWP al permitir que los desarrolladores usen React con las características nativas de estas plataformas."
            image={reactNativeIcon}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            date="2017"
            name="Flutter"
            who="Google Inc."
            description="Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google. Suele usarse para desarrollar interfaces de usuario para aplicaciones en Android, iOS y Web así como método primario para crear aplicaciones para Google Fuchsia."
            image={flutterIcon}
          ></Card>
        </SwiperSlide>
      </Swiper>
      <div className="the_creator">
        Instituto Tecnológico de Tepic
        <br />
        Ingeniería en Sistemas Computacionales
        <br />
        Desarrollo de Aplicaciones Híbridas
        <br />
        Bradley Addiel González Flores
      </div>
      <div className="indications">
        Desliza hacía los lados o utiliza el scroll dentro del área clara.
      </div>
    </div>
  );
}

export default App;
