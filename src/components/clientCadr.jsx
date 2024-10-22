export function ClientCard(props){

    return(
         <div class="box">
        <div class="b-1">
          <div class="client_id">
            <div class="img-box">
              <img src={props.image} alt=""/>
            </div>
            <div class="name">
              <h5>
                {props.name}
              </h5>
              <h6>
               {props.title}
              </h6>
            </div>
          </div>
        </div>
        <div class="client_detail">
          <p>
           {props.spacification}
          </p>
        </div>
      </div>
      );
}