var Modal = require('boron/DropModal');
var Example = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },

    callback: function(event){
        console.log(event);
    },

    render: function() {
    return (
        <div>
          <button onClick={this.showModal}>Open</button>
          <Modal ref="modal" keyboard={this.callback}>
            <h2>I am a dialog</h2>
            <button onClick={this.hideModal}>Close</button>
          </Modal>
        </div>
      );
    }
});
