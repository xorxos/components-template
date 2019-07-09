import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../../shared';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {

  placeholder = 'https://via.placeholder.com/190x190';
  uploaders = {
    avatar: {
      progress: undefined,
      url: undefined
    },
    files: {
      list: [],
      invalidList: []
    },
    image: {
      progress: undefined,
      url: undefined
    }
  };

  constructor(public dialog: MatDialog) {}

  onMultipleChange(event: any, uploader: string): void {
    this.onDropzoneMultipleChange(event.target.files, uploader);
  }

  onSingleChange(event: any, uploader: string): void {
    this.onDropzoneSingleChange(event.target.files, uploader);
  }

  onDropzoneMultipleChange(fileList: Array<File>, uploader: string): void {
    for (const file of fileList) {
      const l = this.uploaders[uploader].list.push(file);
      this.read(file, this.uploaders[uploader].list[l - 1]);
    }
  }

  onDropzoneSingleChange(fileList: Array<File>, uploader: string): void {
    this.uploaders[uploader] = fileList[0];
    this.read(fileList[0], this.uploaders[uploader]);
  }

  resetUploader(uploader: string): void {
    if (uploader === 'files') {
      this.uploaders[uploader] = {
        list: [],
        invalidList: []
      };
    } else {
      this.uploaders[uploader] = {};
    }
  }

  post(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        icon: 'check-circle',
        iconColor: 'success',
        title: 'File uploaded corretly',
        text: 'Your file has been uploaded',
        button: 'DONE'
      }
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.resetUploader('image');
    });
  }

  read(file: File, store: any): void {
    store.total = (file.size / 1024).toFixed(2);
    store.progress = 0;
    store.loaded = 0;
    const reader = new FileReader();

    reader.onload = (e: any) => {
      store.url = e.target.result;
    };

    reader.onprogress = (e: ProgressEvent) => {
      if (e.lengthComputable) {
        store.progress = Math.round((e.loaded / e.total) * 100);
        store.loaded = (e.loaded / 1024).toFixed(2);
      }
    };

    reader.readAsDataURL(file);
  }

}
