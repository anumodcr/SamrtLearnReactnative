import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
 import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import MathType from '@wiris/mathtype-ckeditor5';

// DecoupledEditor
//     .create( document.querySelector( '#editor' ), {
//         plugins: [ MathType],
//         toolbar: [ 'MathType', 'ChemType' ]
//     } )
//     .then()
//     .catch( );

const DocumentEditor = () => {
  return (
    <div style={{width:"800px"}}>
        <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
                    config={{
                        ckfinder:{uploadUrl: "http://cla.campuslte.com/api/fileupload/editorupload"}
                    }}
                />
    </div>
  )
}

export default DocumentEditor
