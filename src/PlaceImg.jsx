export default function PlaceImg({place, index=0, classname = null}){

    if (!place.photos?.length){
        return '';
    }

    if(!classname){
        classname = 'object-cover';
    }

    return (
        <img className='classname' src={'https://mini-airbnb-api.onrender.com/uploads/'+ place.photos[0]} alt="property photo"/>
        );
}