import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';

// Import Pages Component
import Pengguna from './pengguna';
import Toko from './toko';

function Pengaturan (){
    return (
        <Switch>
            <Route path="/pengaturan/pengguna" component={Pengguna}/>
            <Route path="/pengaturan/toko" component={Toko}/>
        </Switch>
    )
}

export default Pengaturan;