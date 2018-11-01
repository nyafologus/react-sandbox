// Credit for the beautiful pictures goes to Elsa Bleda
// https://www.behance.net/gallery/66672659/Midnight-Gothic-Johannesburg
// https://www.behance.net/gallery/51777425/The-Zone
// https://www.behance.net/gallery/63573187/Mirror-World-Istanbul

// Hyena fun facts are from Wikipedia https://en.wikipedia.org/wiki/Spotted_hyena

// Carousel template from https://mdbootstrap.com/docs/react/advanced/carousel/

import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselComponent extends Component {
  render(){
    return(
      <Container>
        <h5 className="m-3 text-center leckerli pb-1">Hyena fun facts over some neat but otherwise totally unrelated pictures because hyenas are generally pretty awesome and now you know it too!</h5>
        {/* mt-5 mb-2 text-center leckerli text-info */}
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100 round pb-1" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fdcdde66672659.5b92e224c0fc6.jpg" alt="night scenery" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive leckerli biggo mb-2">Unique and adaptable</h3>
                <p className="medium-ish">Feigns dead when attacked</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100 round pb-1" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1665651777425.58f94d2b5b72c.jpg" alt="night scenery" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive leckerli biggo mb-2">Nocturnal</h3>
                <p className="medium-ish" >Smart and skilled hunter</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100 round pb-1" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d4cbf51777425.58f94d2b5cd1e.jpg" alt="night scenery" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive leckerli biggo mb-2">Intelligent</h3>
                <p className="medium-ish">cooperative and highly social</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100 round pb-1" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa4a2a63573187.5b7e0f3ddce5e.jpg" alt="night scenery" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive leckerli biggo mb-2">Led by females</h3>
                <p className="medium-ish">Packs work together effectively</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselComponent;