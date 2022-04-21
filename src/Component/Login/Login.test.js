
import { getByTestId, render ,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';


describe('login form',()=>{

    test('render login form with a button',async()=>{
        //Arrange
        render(<Login/>)

        //Act
        //....

        //Assert
        const loginbutton =await screen.findAllByRole('button');
        expect(loginbutton).toHaveLength(1);
       
    })
    
    test('render email input field',()=>{
        //Arrange
        render(<Login/>)

        //Act
        //....

        //Assert
        const Inputelement =screen.getByTestId('email-input');
        expect(Inputelement).toBeInTheDocument();
        expect(Inputelement).toHaveAttribute('type','email');
    })

    test('pass valid email to mail input field',()=>{
        //arrange
        render(<Login/>)

        //ACT
        const Inputelement=screen.getByTestId('email-input')
        userEvent.type(Inputelement,"test@mail.com")

        //Assert
        const Inputvalidelement = screen.queryByTestId('email-input');
        expect(Inputvalidelement).toHaveValue("test@mail.com");
        const errelement=screen.queryByTestId("error-msg")
        expect(errelement).not.toBeInTheDocument();


    })
    test('pass errmsg when invalid email',()=>{
        
        //arrange
        render(<Login/>)

          //ACT
          const Inputelement=screen.getByTestId('email-input')
          userEvent.type(Inputelement,"test")

          //Assert
          const Inputvalidelement = screen.queryByTestId('email-input');
          expect(Inputvalidelement).toHaveValue("test");
          const errelement=screen.queryByTestId("error-msg")
          expect(errelement).toBeInTheDocument();
          const errtextelement =screen.getByText('Please enter a valid email',{exact:false});
          expect(errtextelement).toBeInTheDocument();

    });

    test('render password input field type',()=>{
        //Arrange
        render(<Login/>)

        //Act
        //....

        //Assert
        const Inputelement =screen.getByTestId('password-input');
        expect(Inputelement).toBeInTheDocument();
        expect(Inputelement).toHaveAttribute('type','password');
    })
     
    test('pass valid password to password field',()=>{
        //arrange
        render(<Login/>)

        //ACT
        const Inputelement=screen.getByTestId("password-input")
        userEvent.type(Inputelement,"Pass123")

        //Assert
        const Inputvalidelement = screen.getAllByPlaceholderText("Password");
        expect(Inputvalidelement).toHaveValue("Pass123");
        //const errelement=screen.queryByTestId("perror-msg")
        expect(screen.queryByTestId("perrormsg")).not.toBeInTheDocument();


    })

    // test('Should be able to submit the form',()=>{
    //     //arrange
    //     render(<Login/>)
    //     const submitbtn =screen.getByTestId("submit");
    //     const emailInputNode=screen.getAllByPlaceholderText("Enter email")
    //     const passwordInputNode=screen.getByPlaceholderText("Password")
         
    //     //act
    //     userEvent.type(emailInputNode,"test@mail.com")
    //     userEvent.type(passwordInputNode,"Pass123")

    //     userEvent.click(submitbtn);

    //     const userInfo=screen.getByText("pass123");
    //     expect(userInfo).toBeInTheDocument();
    // })

    
})