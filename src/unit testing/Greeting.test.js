import { render ,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting suit',()=>{
    test('renders greetings as atest',()=>{
        //Arrange
        render(<Greeting/>)
       //Act
       //...nothing
    
       //Assert
       const Greetingelement =screen.getByText('Hello Im gonna test now');
       expect(Greetingelement).toBeInTheDocument();
    })
    test('renders "good to test this code" if the button was not clicked',()=>{
        //Arrange
        render(<Greeting/>)

        //Assert
        const nonchangeelement = screen.getByText('good to test this code',{exact:false})
        expect(nonchangeelement).toBeInTheDocument();
    })
    test('renders "changed" if the button was clicked',()=>{
        //Arrange
        render(<Greeting/>)
        
        //Act
        const buttonelement =screen.getByRole('button')
        userEvent.click(buttonelement)

        //assert
        const changeelement = screen.getByText('changed')
        expect(changeelement).toBeInTheDocument();
    })

    test('does not render "its good to test this code" when button clicked',()=>{
        render(<Greeting/>)
        
        //Act
        const buttonelement =screen.getByRole('button')
        userEvent.click(buttonelement)

        //assert
        const buttonclicked = screen.queryByText('its good to test this code')
        expect(buttonclicked).toBeNull()

    })
})
