import Tooltip from "./tooltip";

export default function Example() {
    return (
        <Fragment>
            <Tooltip text="Image">
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
