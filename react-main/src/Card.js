export const Card = (props) => {
    return (
        <div className="card">
           <p className="noPadding"><b>Name:</b> {props.user.name} </p>
           <p className="noPadding"><b>Email:</b> {props.user.email} </p>
           <p className="noPadding"><b>Gender:</b> {props.user.gender} </p>
        </div>
    )
}