export function LayoutContainer(props ){
    return(
        <section className={props.className}>
        <div class="heading_container">
          <h2>
            {props.title}
          </h2>
        </div>
        {props.children}

        <div class="btn-box">
          <a href={props.link}>
           {props.buttonText}
          </a>
        </div>
      </section>
    );
}