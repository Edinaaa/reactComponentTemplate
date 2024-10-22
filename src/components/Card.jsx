export function Card(props){
    return(
        <div class="box" >
        <div class="img-box">
          {props.children}
        </div>
        <div class="detail-box">
          <h5>
            {props.title}
          </h5>
          <p>
           {props.details}
          </p>
        </div>
      </div>
    );
}