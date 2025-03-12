import Tooltip from "./tooltip";

export default function Example() {
    return (
        <Fragment>
            <Tooltip text="Image" possition='left'>
                    <Image
                      src='/images/icons8-delete-128.png'
                      alt='icons8-delete-128.png'
                      width={25}
                      height={23}
                    />
            </Tooltip>

            <Tooltip text="Image" possition='right'>
                    <Image
                      src='/images/icons8-delete-128.png'
                      alt='icons8-delete-128.png'
                      width={25}
                      height={23}
                    />
            </Tooltip>

            <Tooltip text="Image" possition='top'>
                    <Image
                      src='/images/icons8-delete-128.png'
                      alt='icons8-delete-128.png'
                      width={25}
                      height={23}
                    />
            </Tooltip>

            <Tooltip text="Image" possition='bottom'>
                    <Image
                      src='/images/icons8-delete-128.png'
                      alt='icons8-delete-128.png'
                      width={25}
                      height={23}
                    />
            </Tooltip>
        </Fragment>
    );
}
