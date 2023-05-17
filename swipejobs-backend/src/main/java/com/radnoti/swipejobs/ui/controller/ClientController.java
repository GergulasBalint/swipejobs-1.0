package com.radnoti.swipejobs.ui.controller;

import com.radnoti.swipejobs.io.entity.ClientEntity;
import com.radnoti.swipejobs.io.repositories.ClientRepository;
import com.radnoti.swipejobs.service.impl.ClientImpl;
import com.radnoti.swipejobs.shared.dto.ClientDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    ClientImpl clientImpl;

    @Autowired
    ClientRepository clientRepository;
    @CrossOrigin("*")
    @PutMapping(path = "/client/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateClient(@PathVariable long id, @RequestBody ClientDto ClientDto) {

        ClientEntity updateClient = clientImpl.updateClient(id, ClientDto);
        return ResponseEntity.ok(updateClient);
    }
    @GetMapping("/client/{id}")
    Optional<ClientEntity> one (@PathVariable long id){
//        System.out.println(id+" CLIENT ID");
        return clientRepository.findById(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PatchMapping("/{id}/incrementJobCount")
    public ResponseEntity<?> incrementJobCount(@PathVariable Long id) {
        Optional<ClientEntity> optionalClient = clientRepository.findById(id);
        if (!optionalClient.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        ClientEntity client = optionalClient.get();
        client.setJobsCount(client.getJobsCount() + 1);
        clientRepository.save(client);
        return ResponseEntity.ok().build();
    }
}
