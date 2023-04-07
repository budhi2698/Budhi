function showeditBox() {
    Swal.fire({
        title: "Are you sure? you wana remove this id!",
        html:
            '<input id="id" type="hidden">' +
            '<input id="emid" class="swal2-input" placeholder="Enter employe_id">',
    //     focusConfirm: true,
    //     preConfirm: () => {
    //         showeditBox();
    //     },
    });
 }  