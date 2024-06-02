import React , {Component, createContext, useState} from "react";
import SimpleCoasterPattern from "../PDF/Simple-Coaster-Pattern.pdf";
import SimpleCoasterImage from "../Images/coaster.jpg";
import DishclothImage from "../Images/dishcloth.jpg";

export const PatternContext = createContext();

class PatternContextProvider extends Component{
    state = {patterns: [
        {
            id: 1,
            name: "Simple Coaster",
            description: "A quick and easy coaster pattern using basic stitches. Perfect for beginners, this pattern works up quickly and is great for practicing the magic ring and half double crochet stitches. Make a set in different colors for a fun and functional home accessory.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 1.99,
            comments: []
        },
        {
            id: 2,
            name: "Easy Dishcloth",
            description: "A straightforward dishcloth pattern suitable for beginners. This pattern alternates between single and double crochet stitches, creating a textured and absorbent fabric. It's an excellent project for practicing stitch transitions and makes a practical addition to any kitchen.",
            pdf: SimpleCoasterPattern,
            image: DishclothImage,
            price: 2.49,
            comments: []
        },
        {
            id: 3,
            name: "Granny Square",
            description: "A classic granny square pattern that can be expanded to any size. This versatile pattern is perfect for creating everything from blankets to bags. The repetitive rounds of double crochet clusters make it an ideal project for relaxing crochet sessions.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 0.99,
            comments: []
        },
        {
            id: 4,
            name: "Simple Beanie",
            description: "A basic beanie pattern that's perfect for beginners. This beanie is worked in the round using half double crochet stitches, and includes easy increases to shape the crown. Customize the length to make a snug or slouchy beanie for yourself or as a thoughtful handmade gift.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 3.49,
            comments: []
        },
        {
            id: 5,
            name: "Lacy Scarf",
            description: "A delicate and elegant lacy scarf pattern using lightweight yarn. Perfect for intermediate crocheters, this pattern incorporates shell stitches and chain spaces to create a beautiful, airy design that can be worn in any season.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 4.99,
            comments: []
        },
        {
            id: 6,
            name: "Chunky Blanket",
            description: "A cozy chunky blanket pattern made with super bulky yarn. Ideal for beginners, this pattern uses simple stitches and works up quickly, resulting in a thick and warm blanket perfect for cold nights.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 7.99,
            comments: []
        },
        {
            id: 7,
            name: "Amigurumi Bunny",
            description: "A cute and cuddly amigurumi bunny pattern. This intermediate-level pattern includes detailed instructions for creating a small, stuffed bunny toy, perfect for gifting or as a charming decoration.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 5.99,
            comments: []
        },
        {
            id: 8,
            name: "Textured Pillow Cover",
            description: "A textured pillow cover pattern that adds a stylish touch to your home decor. Using a combination of bobble stitches and front post double crochet, this pattern creates a unique, 3D effect that will stand out in any room.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 6.49,
            comments: []
        },
        {
            id: 9,
            name: "Summer Top",
            description: "A light and airy summer top pattern, perfect for warm weather. This advanced pattern features lacy stitches and a flattering fit, making it a stylish addition to any wardrobe.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 8.99,
            comments: []
        },
        {
            id: 10,
            name: "Baby Booties",
            description: "Adorable and tiny baby booties pattern, ideal for beginners. These booties are quick to make and can be customized with different colors and embellishments, making them a perfect gift for new parents.",
            pdf: SimpleCoasterPattern,
            image: SimpleCoasterImage,
            price: 3.99,
            comments: []
        }
    ]};
    render(){
        const addComment = (patternId, userId_, comment_) => {
            let foundPattern = this.state.find(pattern => pattern.id === patternId);
            foundPattern.comments.push({userId: userId_, comment: comment_});
    
        }
        return(
            <PatternContext.Provider value={{...this.state, addComment}}>
                    {this.props.children}
            </PatternContext.Provider>
        );   
    }
}

export default PatternContextProvider;