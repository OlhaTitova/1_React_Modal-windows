import Button from './Button';

export const fields = [
     {
        header: 'Do you want to delete this file?',
        text: `Once you delete this file, it won't be possible to undo this action.`,
        textConfirm: 'Are you sure want to delete it?',
        closeButton: true,
        action: [<Button text='Ok' backgroundColor="#B02431"/>, <Button text='Cancel' backgroundColor="#B02431"/>],
        textBtn:'Open first modal', 
        backgroundColor: "#d44637",
        bgColorHeader: "#d44637",
        bgColorBody:"#e74c3c",
        bgColorFooter:"#e74c3c",
    }
    , {
        header: 'Confirm',
        text: `You have started writing or editing a post.`,
        textConfirm: 'Are you sure you want to leave this page?',
        closeButton: false,
        action: [<Button text='Leave this page' backgroundColor="rgb(13 90 155)"/>, <Button text='Stay on this page' backgroundColor="rgb(13 90 155)"/>],
        textBtn:'Open second modal', 
        backgroundColor: "rgb(1 107 225)",
        bgColorHeader: "rgb(1 107 225)",
        bgColorBody: "rgb(39 163 227)",
        bgColorFooter: "rgb(39 163 227)",
    }
]
