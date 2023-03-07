import React,{useState} from "react";

// class ConfirmButton extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isConfirmed: false,
    //     };
        //바인드를 사용하는 방식
        //this.handleConfirm = this.handleConfirm.bind(this);

        //    handleConfim(){
        //     this.setState((prevState)=>({
        //         isConfirmed:!prevState.isConfirmed,
        //     }));
    // }
//Arrow function으로 변경
// handleConfirm = () => {
//     this.setState((prevState) => ({
//         isConfirmed: !prevState.isConfirmed,
//     }))
// }


// render(){
//     return (
//         <button
//             onClick={this.handleConfirm}
//             disabled={this.state.isConfirmed}
//         >
//             {this.state.isConfirmed ? "확인됨" : "확인하기"}

//         </button>
//     );
// }

// }


//함수 컴포넌트로 변경
function ConfirmButton(props) {
    const [isConfirmed, setIsConfimed] = useState(false);

    const handleConfirm = () => {
        setIsConfimed((prevIsConfirmed) => !prevIsConfirmed);
    };
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}


export default ConfirmButton;