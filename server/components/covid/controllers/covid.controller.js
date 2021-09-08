import CovidModel from '../model/covid.model';
import {COVID_BASE_URL} from '../configs/server.config'

let covidController = {};
covidController.state = async(req, res) => {
  
  try {

    res.status(200).json({hello : 'data'});

  } catch (error) {
    res.status(400).json(error);
  }

}


export default covidController;