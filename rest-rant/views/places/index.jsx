const React = require('react')
const Def = require('../default')



function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2 className='text-center'>{place.name}</h2>
        <p className='text-center'>{place.cuisines}</p>
        <img className='center' src={place.pic} alt={place.name} />
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}


module.exports = index