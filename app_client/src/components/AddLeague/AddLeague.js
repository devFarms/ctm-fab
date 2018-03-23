import React, {Component} from "react";
import "./AddLeague.css"; 


class AddLeague extends Component {
      
    render() {      
        return(
            <div>
            
        
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Add your League/Team
</button>

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">NBA Teams</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Atlanta Hawks
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" checked="false" />
            Boston Celtics            
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Brooklyn Nets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option4" />
            Charlotte Hornets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option5" />
            Chicago Bulls
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option6" />
            Cleveland Cavaliers
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option7" />
            Dallas Mavericks
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Denver Nuggets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Detroit Pistons
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Golden State Warriors
          </label>
        </div>      
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Houston Rockets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Indiana Pacers
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            LA Clippers
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Los Angeles Lakers
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Memphis Grizzlies
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Miami Heat
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Milwaukee Bucks
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Minnesota Timberwolves
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            New Orleans Pelicans
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            New York Knicks
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Oklahoma City Thunder
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Orlando Magic
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Philadelphia 76ers            
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Phoenix Suns
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Portland Trail Blazers
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Sacramento Kings
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            San Antonio Spurs
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Toronto Raptors
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option8" />
            Utah Jazz
          </label>
        </div>
      </form>

    </div>
  </div>
</div>

      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        ); 
    }
    
}

export default AddLeague;
