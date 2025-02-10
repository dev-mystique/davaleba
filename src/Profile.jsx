import Dash from "./dashboard";

function Profile(props){

    return (
        <div className="profile">
            <Dash name={props.name}/>
        </div>
    )
}
export default Profile