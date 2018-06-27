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
  <div>
    <button onclick={action("fetchCorgi")}>New Corgi!</button>
    <img src={state.corgi} alt=""/>
  </div>

withFx(app)(state, actions, view, document.body).fetchCorgi()