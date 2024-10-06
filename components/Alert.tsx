import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Alert = () => {
    return (
        <div className="summary-items">
            <a className='btn-primary text-center'>
                <AlertDialog >
                    <AlertDialogTrigger>Save</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Do you want to print?</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription></AlertDialogDescription>
                        <div className="flex justify-center">
                            <AlertDialogFooter>
                                <AlertDialogCancel>Yes</AlertDialogCancel>
                                <AlertDialogAction>No</AlertDialogAction>
                            </AlertDialogFooter>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
            </a>
        </div>
    )
}

export default Alert