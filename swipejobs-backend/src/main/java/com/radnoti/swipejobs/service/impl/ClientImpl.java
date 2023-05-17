package com.radnoti.swipejobs.service.impl;

import com.radnoti.swipejobs.io.entity.ClientEntity;
import com.radnoti.swipejobs.io.repositories.ClientRepository;
import com.radnoti.swipejobs.shared.dto.ClientDto;

import jakarta.persistence.EntityNotFoundException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientImpl {
    @Autowired
    private ClientRepository clientRepository;
    public ClientEntity updateClient(Long id, ClientDto clientDto) {
//        System.out.println("id ami bugos: "+id);
        ClientEntity clientEntity = clientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client nem található"));
        System.out.println("CLIENT ID: "+ clientEntity.getId());
        clientEntity.setCompany(clientDto.getCompany());
        clientEntity.setTax_number(clientDto.getTax_number());
        clientEntity.setLocation(clientDto.getLocation());

        return clientRepository.save(clientEntity);
    }
}
