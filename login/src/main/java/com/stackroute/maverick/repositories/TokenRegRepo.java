package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;
import com.stackroute.maverick.domain.TokenTableModel;

public interface TokenRegRepo extends CrudRepository <TokenTableModel, Integer>  {

}
