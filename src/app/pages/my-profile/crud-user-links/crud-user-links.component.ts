import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-crud-user-links',
  templateUrl: './crud-user-links.component.html',
  styleUrls: ['./crud-user-links.component.scss'],
})
export class CrudUserLinksComponent {
  @Input() userData!: User;
  @Output() closeUserLinksCrudEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  linksForm = this.fb.group({
    websiteGroup: this.fb.group({
      urlControl: ['', Validators.required],
      placeholderControl: ['', Validators.required],
    }),
    githubGroup: this.fb.group({
      urlControl: ['', Validators.required],
      placeholderControl: ['', Validators.required],
    }),
    linkedinGroup: this.fb.group({
      urlControl: ['', Validators.required],
      placeholderControl: ['', Validators.required],
    }),
    instagramGroup: this.fb.group({
      urlControl: ['', Validators.required],
      placeholderControl: ['', Validators.required],
    }),
    youtubeGroup: this.fb.group({
      urlControl: ['', Validators.required],
      placeholderControl: ['', Validators.required],
    }),
  });

  fireCloseUserLinksCrudEvent(): void {
    this.closeUserLinksCrudEvent.emit();
  }

  saveLinks(): void {
    console.log(this.linksForm.value);

    if (this.linksForm.valid) {
      const {
        websiteGroup,
        githubGroup,
        linkedinGroup,
        instagramGroup,
        youtubeGroup,
      } = this.linksForm.value;

      const links = {
        website: {
          url: websiteGroup?.urlControl!,
          placeholder: websiteGroup?.urlControl!,
        },
        github: {
          url: githubGroup?.urlControl!,
          placeholder: githubGroup?.urlControl!,
        },
        linkedin: {
          url: linkedinGroup?.urlControl!,
          placeholder: linkedinGroup?.urlControl!,
        },
        instagram: {
          url: instagramGroup?.urlControl!,
          placeholder: instagramGroup?.urlControl!,
        },
        youtube: {
          url: youtubeGroup?.urlControl!,
          placeholder: youtubeGroup?.urlControl!,
        },
      };

      // save links
      this.authService.updateCurrentUser({
        ...this.userData,
        links,
      });
      this.fireCloseUserLinksCrudEvent();
    } else {
      // do nothing
    }
  }
}
