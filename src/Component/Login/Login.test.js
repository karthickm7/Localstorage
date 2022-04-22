
import { render ,screen} from '@testing-library/react';
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

        // let passwordreg = /^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/;
        //arrange
        render(<Login/>)
        // let password='Pass@123';
        // expect( passwordreg.test(password)).toBe(true)
        //act

        const Inputpasswordelement=screen.getByTestId("password-input")
        userEvent.type(Inputpasswordelement,"pass@123")
        const errelement=screen.getByText('Please enter a valid password.')
        expect(errelement).toBeInTheDocument();
        

        //Assert
        // const passwordvalidelement = screen.queryByTestId("password-input");
        // expect(passwordvalidelement).toHaveValue("pass@123");
        
    })


    test('pass invalid password to password field',()=>{

       
        render(<Login/>)
        //act
        const Inputpassword=screen.getByTestId("password-input")
        userEvent.type(Inputpassword,"pass")
        
        
          const passworderror=screen.queryByTestId("perror-msg")
          expect(passworderror).toBeInTheDocument();
          const errortextelement =screen.getByText('Please enter a valid password',{exact:false});
          expect(errortextelement).toBeInTheDocument();
    })
})