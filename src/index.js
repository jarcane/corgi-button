import { h, app } from "hyperapp";
import { withFx, http, action } from "@hyperapp/fx";

const state = { 
  corgi: "" 
}

const actions = {
  fetchCorgi: () => http("https://dog.ceo/api/breed/corgi/images/random", "corgiFetched"),
  corgiFetched: data => ({ corgi: data.message })  
}

const view = state => 
  <div className="page">
    <div className="header">
      <h2>The Corgi Generator</h2>
    </div>
    <div className="image">
      <img src={state.corgi} alt=""/>
    </div>
    <div className="button">
      <button className="button__corgi" onclick={action("fetchCorgi")}>New Corgi!</button>
    </div>
    <div className="footer">
      <p>
       Corgis provided by <a href="https://dog.ceo/dog-api/">dog.ceo API</a>. 
       Code @<a href="https://glitch.com/edit/#!/corgi-button">Glitch</a>.
      </p>
    </div>
  </div>

withFx(app)(state, actions, view, document.body).fetchCorgi()