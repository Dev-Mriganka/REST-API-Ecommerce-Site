// https://countriesnow.space/api/v0.1/countries/flag/images
import axios from "axios"

export const Countries = () => {
    return axios.get(
      `https://countriesnow.space/api/v0.1/countries/flag/images`
    )
}
