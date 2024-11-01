import { Component, inject } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  message = '';
  listMesages: string[] = []

  constructor(private serviceSocket: SocketService) {}

  ngOnInit(){
    this.serviceSocket.getMessages().subscribe((msgs) => (this.listMesages = msgs))
  }

  sendMessage(){    
    this.message && this.serviceSocket.sendMessage(this.message)
    this.message = ''
  }


}
  
