import React from 'react';
import "./style.css";
// import Bo from "../Images/unamed.jpg";
// import { Col, Row, Container } from "../Grid";

function Middle() {
    return (
        <div>
<div className="container marketing">
<div className="row">
  <div className="col-lg-4">
    {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
    <h2>Heading</h2>
    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
    <h2>Heading</h2>
    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
    <h2>Heading</h2>
    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  </div>
</div>

<hr className="featurette-divider" />
<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  <div className="col-md-5">
    {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
  </div>
</div>
    </div>
        </div>
    )
}

export default Middle;