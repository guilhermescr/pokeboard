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

  ngOnInit(): void {
    if (this.userData.links) {
      this.linksForm.setValue({
        websiteGroup: {
          urlControl: this.userData.links.website.url!,
          placeholderControl: this.userData.links.website.placeholder!,
        },
        githubGroup: {
          urlControl: this.userData.links.github.url!,
          placeholderControl: this.userData.links.github.placeholder!,
        },
        linkedinGroup: {
          urlControl: this.userData.links.linkedin.url!,
          placeholderControl: this.userData.links.linkedin.placeholder!,
        },
        instagramGroup: {
          urlControl: this.userData.links.instagram.url!,
          placeholderControl: this.userData.links.instagram.placeholder!,
        },
        youtubeGroup: {
          urlControl: this.userData.links.youtube.url!,
          placeholderControl: this.userData.links.youtube.placeholder!,
        },
      });
    }
  }

  fireCloseUserLinksCrudEvent(): void {
    this.closeUserLinksCrudEvent.emit();
  }

  saveLinks(): void {
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
          placeholder: websiteGroup?.placeholderControl!,
        },
        github: {
          url: githubGroup?.urlControl!,
          placeholder: githubGroup?.placeholderControl!,
        },
        linkedin: {
          url: linkedinGroup?.urlControl!,
          placeholder: linkedinGroup?.placeholderControl!,
        },
        instagram: {
          url: instagramGroup?.urlControl!,
          placeholder: instagramGroup?.placeholderControl!,
        },
        youtube: {
          url: youtubeGroup?.urlControl!,
          placeholder: youtubeGroup?.placeholderControl!,
        },
      };

      this.authService.updateCurrentUser({
        ...this.userData,
        links,
      });
      this.fireCloseUserLinksCrudEvent();
    }
  }
}
