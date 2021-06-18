import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

function MovieInfo({ id, year, title, summary, poster, modal, closeModal }) {
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (modal) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [modal]);
  
    return (
        <div>
            <Dialog
                width={800}
                open={modal}
                onClose={closeModal}
                scroll="body"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                
                <img src={poster} width='100%'/>
                <DialogContent dividers={false}>
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                        <Typography gutterBottom variant="h5" component="h2" >
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p" color="textSecondary">
                            {summary}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={closeModal} color="primary">
                        Play
                    </Button>
                </DialogActions>
            </Dialog>
      </div>
    );
  }
  export default MovieInfo;